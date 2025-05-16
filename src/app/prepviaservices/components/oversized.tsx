import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OversizedItemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-cyan-600 mb-4 font-inter text-center">Oversized Item Handling</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Specialized handling services clearly priced by weight categories
        </p>

        <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-700">Weight Category</TableHead>
                  <TableHead className="text-right text-gray-700">Additional Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-gray-700">20–30 lbs</TableCell>
                  <TableCell className="text-right">+$2.00/item</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-700">30.1–40 lbs</TableCell>
                  <TableCell className="text-right">+$3.00/item</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-700">40.1–50 lbs</TableCell>
                  <TableCell className="text-right">+$4.00/item</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-700">50.1–100 lbs</TableCell>
                  <TableCell className="text-right">+$10.00/item</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-gray-700">100 lbs+</TableCell>
                  <TableCell className="text-right">+$15.00/item</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
