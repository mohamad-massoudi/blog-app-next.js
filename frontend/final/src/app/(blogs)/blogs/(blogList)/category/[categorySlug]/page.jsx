import BlogList from "@/components/blog/BlogList";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries = queryString.stringify(searchParams);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`
  );
  const {
    data: { posts },
  } = await res.json();

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">{`پستی در این دسته بندی یافت نشد`}</p>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}
export default Category;
