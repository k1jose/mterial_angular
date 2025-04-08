import { Component, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentEditComponent } from './student-edit/student-edit.component'; // Ajusta la ruta si es necesario

export type Student = {
  name: string;
  phone: string;
  period: string;
  career: string;
};

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {
  searchTerm = '';
  displayedColumns: string[] = ['name', 'phone', 'period', 'career', 'actions'];
  students = signal<Student[]>(Array.from({ length: 20 }, (_, i) => ({
    name: `Estudiante ${i + 1}`,
    phone: `+51 987 654 ${String(i).padStart(2, '0')}`,
    period: `202${i % 3 + 1}`,
    career: ['Ingeniería', 'Medicina', 'Derecho', 'Administración'][i % 4]
  })));

  filteredStudents = () => this.students().filter(s =>
    s.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    s.phone.includes(this.searchTerm) ||
    s.period.includes(this.searchTerm) ||
    s.career.toLowerCase().includes(this.searchTerm.toLowerCase())
  );

  constructor(private dialog: MatDialog) {}

  // Abrir el modal de edición
  editStudent(student: Student) {
    const dialogRef = this.dialog.open(StudentEditComponent, {
      data: student, // Pasamos el estudiante al modal
    });

    // Cuando el modal se cierra, obtenemos el estudiante editado
    dialogRef.afterClosed().subscribe((result: Student | undefined) => {
      if (result) {
        // Si el estudiante ha sido editado, lo reemplazamos en la lista
        const index = this.students().findIndex(s => s === student);
        if (index !== -1) {
          this.students.set([
            ...this.students().slice(0, index),
            result, // Estudiante editado
            ...this.students().slice(index + 1)
          ]);
        }
      }
    });
  }

  deleteStudent(student: Student) {
    this.students.set(this.students().filter(s => s !== student));
  }
}
