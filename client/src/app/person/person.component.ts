import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  template: `
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
                   <tr>
                      <td>f name </td>
                      <td>l name</td>
                      <td>
                        <div class="d-inline-flex gap-2">
                        <a href="#" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                        </div>
                      </td>
                   </tr>
                </tbody>
          </table>
      </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {

}
