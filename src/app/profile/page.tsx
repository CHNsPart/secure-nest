import ProfileInfo from "@/components/ProfileInfo";
import { cookies } from "next/headers";

export default function page() {
  const cookieStore = cookies();
  const userInfo: any = cookieStore.get("user");
  // console.log(userInfo);
  const user = JSON?.parse(userInfo?.value);
  console.log(user);
  return (
    <div className="container min-h-screen w-full py-12">
      <ProfileInfo user={user} />
      {/* <ProfilePage user={user} /> */}
    </div>
  );
}
