import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "../components/ServerComponent";

export default function Home() {
  return (
    <div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
