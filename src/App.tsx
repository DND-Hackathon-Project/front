import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

function App() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}

export default App;
