import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Student } from '../estudiantes.component'; // Ajustá el path si es necesario

@Component({
  selector: 'app-student-edit',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './student-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentEditComponent {
  editedStudent: Student;

  constructor(
    private dialogRef: MatDialogRef<StudentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    // Creamos una copia del estudiante para editar sin afectar el original
    this.editedStudent = { ...data };
  }

  save() {
    this.dialogRef.close(this.editedStudent); // Devolvemos el estudiante editado
  }

  cancel() {
    this.dialogRef.close(); // Cerramos sin cambios
  }
}
