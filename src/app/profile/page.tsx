import ProfilePage from "@/components/ProfilePage";
import { cookies } from "next/headers";

export default function page() {
  const cookieStore = cookies();
  const userInfo: any = cookieStore.get("user");
  // console.log(userInfo);
  const user = JSON?.parse(userInfo?.value);

  return (
    <div className="container min-h-screen w-full py-12">
      <ProfilePage user={user} />
    </div>
  );
}
