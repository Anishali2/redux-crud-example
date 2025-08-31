import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Redux CRUD Learning App</h1>
        <p className="text-gray-600">
          Learn Redux by creating, reading, updating, and deleting items
        </p>
      </header>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        {/* Create Form */}
        <div>
          <ItemForm />
        </div>

        {/* Items List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          <ItemList />
        </div>
      </div>
    </div>
  )
}