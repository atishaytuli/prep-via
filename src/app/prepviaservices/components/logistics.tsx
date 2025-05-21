import { Table, TableBody, TableCell, TableRow } from "../../../components/ui/table"

export default function LogisticsStorageSection() {
  return (
    <section className="py-16 pt-8 bg-gray-50 max-w-7xl mx-auto">
      <div className="container px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 pt-6 my-4 font-inter text-center">Logistics & <span className="italic font-light text-cyan-600 relative font-serif">Storage</span> Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive logistics solutions to streamline your supply chain
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h3 className="text-2xl font-medium font-inter text-gray-800">Container & Forwarding</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Container Receiving {"(20')"}</TableCell>
                    <TableCell className="text-right">$250/container</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Container Receiving {"(40')"}</TableCell>
                    <TableCell className="text-right">$500/container</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Carton Forwarding</TableCell>
                    <TableCell className="text-right">$2.00/carton</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Pallet Forwarding (up to 10)</TableCell>
                    <TableCell className="text-right">$15/pallet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Pallet Forwarding (11+)</TableCell>
                    <TableCell className="text-right">$12/pallet</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h3 className="text-2xl font-medium font-inter text-gray-800">Storage & Handling</h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Secure Storage</TableCell>
                    <TableCell className="text-right">$0.07 per cubic foot per day</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-gray-700">Professional Palletizing</TableCell>
                    <TableCell className="text-right">$18.00/pallet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2} className="text-sm text-gray-500">
                      Expert palletizing with premium 80-gauge black pallet wrap film, ensuring maximum product
                      security, privacy, and shipping efficiency.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
