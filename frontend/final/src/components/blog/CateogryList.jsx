import Link from "next/link";

async function CateogryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href={`/blogs/`}>همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CateogryList;
