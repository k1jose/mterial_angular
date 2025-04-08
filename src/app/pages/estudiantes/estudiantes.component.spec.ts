import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantesComponent } from './estudiantes.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

describe('EstudiantesComponent', () => {
  let component: EstudiantesComponent;
  let fixture: ComponentFixture<EstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesComponent, MatTableModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter students correctly', () => {
    component.searchTerm = 'Estudiante 1';
    expect(component.filteredStudents().length).toBeGreaterThan(0);
  });

  it('should delete a student', () => {
    const initialCount = component.students().length;
    component.deleteStudent(component.students()[0]);
    expect(component.students().length).toBe(initialCount - 1);
  });
});