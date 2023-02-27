import React, { useContext } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";

const AdminTable = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}"); 
  console.log(user)
  const { firstName: fname, lastName: lname, email: email, password: password,id } = user;
	return (
		<div>
			<TableContainer>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th>ID</Th>
							<Th>Fisrt name</Th>
							<Th>Last name</Th>
							<Th>Email</Th>
							<Th>Password</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>#{!(id+Math.floor(Math.random()*1500))?'1245':id+Math.floor(Math.random()*1500)}</Td>
							<Td>{fname}</Td>
							<Td>{lname}</Td>
							<Td>{email}</Td>
							<Td>{password}</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AdminTable;
