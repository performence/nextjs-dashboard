import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'

interface SearchParams {
  searchParams?: {
    query?: string
    page?: string
  }
}

export default async function Page({ searchParams }: SearchParams) {
  const query = searchParams?.query || ''

  const customers = await fetchFilteredCustomers(query)

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  )
}
