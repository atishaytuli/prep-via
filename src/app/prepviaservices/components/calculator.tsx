"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, Package, Scale, Shield, ShoppingBag, Ruler, Plus, X, ChevronDown, Search } from "lucide-react"

// Example add-ons list
const ADD_ONS = [
  { value: "none", label: "None", cost: 0 },
  { value: "sticker_removal", label: "Sticker Removal", cost: 0.25 },
  { value: "additional_labeling", label: "Additional Labeling", cost: 0.15 },
  { value: "package_inserts", label: "Package Inserts", cost: 0.2 },
]

type CalculateCostParams = {
  oversized: boolean
  packQty: number
  fragile: boolean
  polybag: boolean
  addOns: string[]
  weight: number
}

function calculateCost({ oversized, packQty, fragile, polybag, addOns, weight }: CalculateCostParams) {
  let cost = 0
  // Oversized
  if (oversized) cost += 2
  // Pack Quantity
  if (packQty === 1) cost += 0.4
  else if (packQty === 2) cost += 1.4
  else if (packQty === 3) cost += 1.7
  else if (packQty === 4) cost += 2.0
  else if (packQty === 5) cost += 2.3
  else if (packQty === 6) cost += 2.6
  else if (packQty > 6) cost += 2.6 + (packQty - 6) * 0.15  
  // Fragile
  if (fragile) cost += oversized ? 0.7 : 0.45
  // Polybag
  if (packQty === 1 && polybag) cost += 0.35
  // Add-ons
  if (!addOns.includes("none")) {
    for (const addOn of addOns) {
      const found = ADD_ONS.find((a) => a.value === addOn)
      if (found) cost += found.cost
    }
  }
  // Weight Tiers
  if (weight >= 20 && weight <= 30) cost += 2
  else if (weight > 30 && weight <= 40) cost += 3
  else if (weight > 40 && weight <= 50) cost += 4
  else if (weight > 50 && weight <= 100) cost += 10
  else if (weight > 100) cost += 15

  return cost
}

function AddOnsMultiSelect({ addOns, setAddOns }: { addOns: string[]; setAddOns: (addOns: string[]) => void }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const ref = useRef<HTMLDivElement | null>(null)

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const handleAddOnChange = (value: string) => {
    let updated: string[]
    if (value === "none") {
      updated = ["none"]
    } else {
      updated = addOns.filter((a) => a !== "none")
      if (addOns.includes(value)) {
        updated = updated.filter((a) => a !== value)
      } else {
        updated.push(value)
      }
      if (updated.length === 0) updated = ["none"]
    }
    setAddOns(updated)
  }

  const selectedLabels = ADD_ONS.filter((a) => addOns.includes(a.value) && a.value !== "none").map((a) => a.label)

  const filteredAddOns = ADD_ONS.filter(
    (addOn) => addOn.label.toLowerCase().includes(search.toLowerCase()) || addOn.value === "none",
  )

  return (
    <div className="relative" ref={ref}>
      <div
        className="min-h-[40px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {selectedLabels.length === 0 ? (
              <span className="text-muted-foreground">Select add-ons...</span>
            ) : (
              selectedLabels.map((label) => (
                <Badge key={label} variant="secondary" className="text-xs">
                  {label}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation()
                      const addOn = ADD_ONS.find((a) => a.label === label)
                      if (addOn) handleAddOnChange(addOn.value)
                    }}
                  />
                </Badge>
              ))
            )}
          </div>
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </div>
      {open && (
        <div className="absolute z-20 w-full mt-1 bg-popover border rounded-md shadow-lg">
          <div className="p-2 border-b">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search add-ons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredAddOns.map((addOn) => (
              <label key={addOn.value} className="flex items-center px-3 py-2 hover:bg-accent cursor-pointer text-sm">
                <input
                  type="checkbox"
                  value={addOn.value}
                  checked={addOns.includes(addOn.value)}
                  onChange={() => handleAddOnChange(addOn.value)}
                  disabled={addOn.value === "none" && addOns.length > 1}
                  className="mr-3 h-4 w-4"
                />
                <span className="flex-1">
                  {addOn.label}
                  {addOn.value !== "none" && (
                    <span className="text-primary ml-2 font-medium">(+${addOn.cost.toFixed(2)}/unit)</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CustomCalculatorForm() {
  const [oversized, setOversized] = useState(false)
  const [packQty, setPackQty] = useState(1)
  const [fragile, setFragile] = useState(false)
  const [polybag, setPolybag] = useState(false)
  const [width, setWidth] = useState("")
  const [length, setLength] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [addOns, setAddOns] = useState(["none"])
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null)

  const handleCalculateClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const cost = calculateCost({
      oversized,
      packQty,
      fragile,
      polybag,
      addOns,
      weight: Number.parseFloat(weight) || 0,
    })
    setCalculatedCost(cost)
  }

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <Card className="w-full max-w-6xl relative">
        {/* Improved gradient - more subtle and centered */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[60%] h-16 bg-gradient-to-r from-cyan-300/30 via-cyan-400/40 to-cyan-300/30 rounded-full blur-3xl"></div>
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="mx-auto w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-cyan-600 bg-clip-text">
            Free Instant Cost Calculator
          </CardTitle>
          <p className="text-muted-foreground">Calculate your shipping costs with precision</p>
        </CardHeader>

        <CardContent className="space-y-8">
          <form className="space-y-6" onSubmit={handleCalculateClick}>
            {/* Dimensions Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-blue-500" />
                <Label className="text-base font-semibold">Cubic Measurements</Label>
                <Badge variant="outline" className="text-xs">
                  inches
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Width</Label>
                  <Input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Length</Label>
                  <Input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Height</Label>
                  <Input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-center"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Package Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-green-500" />
                  <Label className="text-base font-semibold">Package Details</Label>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Pack Quantity</Label>
                  <Input
                    type="number"
                    min={1}
                    value={packQty}
                    onChange={(e) => setPackQty(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-orange-500" />
                    <Label className="text-sm">Weight (lbs)</Label>
                  </div>
                  <Input
                    type="number"
                    min={0}
                    step={0.1}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 25"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <Label className="text-base font-semibold">Special Handling</Label>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-500" />
                      <Label className="text-sm font-medium">Oversized Item</Label>
                    </div>
                    <Switch className="bg-cyan-600 text-cyan-600" checked={oversized} onCheckedChange={setOversized} />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-red-500" />
                      <Label className="text-sm font-medium">Fragile Handling</Label>
                    </div>
                    <Switch checked={fragile} onCheckedChange={setFragile} />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-green-500" />
                      <Label className="text-sm font-medium">Polybag</Label>
                      {packQty > 1 && (
                        <Badge variant="secondary" className="text-xs">
                          Single pack only
                        </Badge>
                      )}
                    </div>
                    <Switch checked={polybag} onCheckedChange={setPolybag} disabled={packQty > 1} />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Add-ons Section */}
            <div className="space-y-4 z-99">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-indigo-500" />
                <Label className="text-base font-semibold">Add-ons</Label>
              </div>
              <AddOnsMultiSelect addOns={addOns} setAddOns={setAddOns} />
            </div>

            {/* Calculate Button */}
            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground px-4 py-2 bg-cyan-600 hover:bg-primary-cyan hover:scale-95 transition-all duration-200 rounded-full"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Cost
            </Button>

            {/* Result */}
            {calculatedCost !== null && (
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Total Cost per Unit</p>
                    <p className="text-4xl font-bold text-green-600">${calculatedCost.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
