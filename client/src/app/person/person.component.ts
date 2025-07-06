import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PersonStore } from './person.store';

@Component({
  selector: 'app-person',
  imports: [],
  providers: [PersonStore],
  template: `
    
    @if(loading()){
      <p>Loading...</p>
    }

    @if(error()){
      <p class="text-danger">Something went wrong!</p>
    }

    <h3>Add/Update Person</h3>
    <form id="form" class="mb-3 d-inline-flex gap-2">
          <div>
             <input type="text" class="form-control" placeholder="First Name">
             <p class="text-danger">Firstname validation</p>
          </div>

          <div>
             <input type="text" class="form-control" placeholder="Last Name">
                          <p class="text-danger">Lastname validation</p>

          </div>

          <div>
            <div class="d-inline-flex gap-2">
              <button  type="submit" class="btn btn-info">Save</button>
              <button type="button" class="btn btn-info">Rest</button>
            </div>
          </div>
      </form>

      @if(!people() || people().length<1){
          <h5>No data found</h5>
      }
      @else{
      <div class="list">
        <h3>People</h3>
          <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  @for(person of people(); track person.id){
                   <tr>
                      <td>{{person.firstName}} </td>
                      <td>{{person.lastName}}</td>
                      <td>
                        <div class="d-inline-flex gap-2">
                        <a (click)="({})" class="btn btn-info">Edit</a>
                        <a (click)="({})" class="btn btn-danger">Delete</a>
                        </div>
                      </td>
                   </tr>
                  }
                </tbody>
          </table>
      </div>
      }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {
  private readonly personStore = inject(PersonStore);

  people = this.personStore.people;
  loading = this.personStore.loading;
  error = this.personStore.error;
}
