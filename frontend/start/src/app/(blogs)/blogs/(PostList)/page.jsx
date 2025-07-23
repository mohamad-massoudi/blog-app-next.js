import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

// export const experimental_ppr = true; // STATIC + DYNAMIC => PPR

async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? " هیچ پستی با این مشخصات پیدا نشد "
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
      <div className="flex w-full justify-center my-8">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
export default BlogPage;

//? FOR ENGLISH TEXT:
//  showing 3 results for "folan"
//   const resultText = posts.length > 1 ? "results" : "result";
// ` showing ${posts.length} ${resultText} for`}
