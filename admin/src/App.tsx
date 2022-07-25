import Button from "@demo/shared/components/Button";
import { customAlert } from "@demo/shared/lib/alert";
import { User } from "@demo/shared/types";
import "./App.css";

function App() {
  const user: User = {
    firstName: "Admin",
    lastName: "Test",
    username: "admin.user",
    isAdmin: true,
  };

  return (
    <div className="App">
      <Button
        onClick={() =>
          customAlert(
            `Hello, ${user.firstName} ${user.lastName} (${
              user.username
            }). You are ${user.isAdmin ? "an admin :)" : "not an admin :("}`
          )
        }
      >
        I'm a button in the Admin!
      </Button>
    </div>
  );
}

export default App;
