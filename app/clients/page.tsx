import { MainLayout } from '../../components/layouts';

export default function ClientsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Client Management</h1>
        
        <div className="flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2.5">🔍</span>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Client
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Client Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Acme Corporation</h3>
                <p className="text-sm text-gray-500">Technology</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📧</span>
                <p className="text-sm">contact@acmecorp.com</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📱</span>
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📍</span>
                <p className="text-sm">123 Tech Blvd, San Francisco, CA</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Active Projects:</span>
                <span className="text-sm text-blue-600">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total Revenue:</span>
                <span className="text-sm text-green-600">$25,000</span>
              </div>
            </div>
          </div>
          
          {/* Client Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Tech Solutions Inc</h3>
                <p className="text-sm text-gray-500">IT Services</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📧</span>
                <p className="text-sm">info@techsolutions.com</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📱</span>
                <p className="text-sm">+1 (555) 987-6543</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📍</span>
                <p className="text-sm">456 IT Avenue, Austin, TX</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Active Projects:</span>
                <span className="text-sm text-blue-600">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total Revenue:</span>
                <span className="text-sm text-green-600">$18,500</span>
              </div>
            </div>
          </div>
          
          {/* Client Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Global Enterprises</h3>
                <p className="text-sm text-gray-500">E-commerce</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📧</span>
                <p className="text-sm">contact@globalenterprises.com</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📱</span>
                <p className="text-sm">+1 (555) 765-4321</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">📍</span>
                <p className="text-sm">789 Commerce St, New York, NY</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Active Projects:</span>
                <span className="text-sm text-blue-600">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total Revenue:</span>
                <span className="text-sm text-green-600">$42,750</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 