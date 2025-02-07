export default async function Abc({ params, searchParams }) {
  const { id } = await params;
  return <h1>Child Abc {id}</h1>;
}
