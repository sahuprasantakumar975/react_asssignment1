import AdminPanel from "./AdminPanel";

function UserGateway() {
  const user = { name: "Alex", role: "admin", status: "active" };

  if (user.status === "suspended") {
    return <h3> Contact Support</h3>;
  }

  return (
    
    <div> {user.role === "admin" && <AdminPanel />} </div>

  );
}

export default UserGateway;