import { useState, useEffect } from 'react';
import * as API from '../services/data';
import { Student } from '../models/Student';
import '../css/studentsList.css';

export function StudentList() {
  const user = sessionStorage.getItem('user') || 'no user';

  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const getStudents = async () => {
      const response = await API.getStudents(user);
      setStudents(response);
    };
    getStudents();
  }, [user]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>DNI</th>
            <th>Name</th>
            <th>Address</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Asignatura</th>
            <th>Edit</th>
            <th>Grade</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.dni}</td>
              <td>{student.nombre}</td>
              <td>{student.direccion}</td>
              <td>{student.edad}</td>
              <td>{student.email}</td>
              <td>{student.asignatura}</td>
              <td>
                <button className="edit">Editar</button>
              </td>
              <td>
                <button className="grade">Calificar</button>
              </td>
              <td>
                <button className="delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
