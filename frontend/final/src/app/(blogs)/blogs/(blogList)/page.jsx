import BlogList from "@/components/blog/BlogList";
import Pagination from "@/components/ui/Pagination";
import { getAllPostsApi } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";

// export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  // set headers:
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/post/list?${queries}`,
  //   { cache: "no-store", ...options }
  // );
  // const {
  //   data: { posts },
  // } = await res.json();

  const { posts, totalPages } = await getAllPostsApi(queries, options);

  const { q: searchValue } = searchParams;

  const resultsText = posts.length > 1 ? "نتایج" : "نتیجه";

  return (
    <>
      {searchValue ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} ${resultsText} برای `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      {posts.length > 0 ? <BlogList posts={posts} /> : null}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
export default Page;
