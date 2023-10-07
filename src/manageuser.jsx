import { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { userService } from "./services/userService";

const initialUser = { id: null, name: "", email: "" };

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialUser);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const users = await userService.getAllusers();
      console.log("userrrsss ", users);
      setUsers(users?.data);
    } catch (error) {
      //
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    if (user.id) {
      const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
      setUsers(updatedUsers);
    } else {
      user.id = Date.now(); // Assign a unique ID
      setUsers([...users, user]);
    }

    setUser(initialUser);
    handleClose();
  };

  const editUser = (id) => {
    const editedUser = users.find((u) => u.id === id);
    setUser(editedUser);
    setShowModal(true);
  };

  const deleteUser = async (id) => {
    console.log("iddd ", id);
    await userService.removeUser(id).then(() => {
      const filteredUsers = users.filter((u) => u._id !== id);
      setUsers(filteredUsers);
    });
  };

  const handleClose = () => {
    setUser(initialUser);
    setShowModal(false);
  };

  return (
    <Container>
      <h2 className="h1 text-center mt-5"> User Account Management</h2>
      {/* <Button className="fs-4 mx-3 mb-3 w-25 p-1" variant="primary" onClick={() => setShowModal(true)}>
        Add User
      </Button> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                {/* <Button className="me-2 mx-2" variant="warning" onClick={() => editUser(u.id)}>
                  Edit
                </Button> */}
                <Button className="me-2 mx-2" variant="danger" onClick={() => deleteUser(u._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit User Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.id ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={user.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={user.email} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addUser}>
            {user.id ? "Update User" : "Add User"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageUser;
