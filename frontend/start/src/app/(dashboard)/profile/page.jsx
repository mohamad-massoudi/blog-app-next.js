import { Suspense } from "react";
import CardsWrapper from "./_componnets/CardsWrapper";
import Fallback from "@/ui/Fallback";
import LatestPosts from "./_componnets/LatestPosts";

async function Profile() {
  return (
    <div>
      <h1 className="text-xl mb-6 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardsWrapper />
      </Suspense>

      <h2 className="text-xl mb-4 text-secondary-700"> آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}
export default Profile;
