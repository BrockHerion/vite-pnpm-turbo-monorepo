import Button from "@demo/shared/components/Button";
import { customAlert } from "@demo/shared/lib/alert";
import { User } from "@demo/shared/types";
import "./App.css";

function App() {
  const user: User = {
    firstName: "Client",
    lastName: "Test",
    username: "testClient@test.com",
    isAdmin: false,
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
        I'm a button in the Client!
      </Button>
    </div>
  );
}

export default App;
