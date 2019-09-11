import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(
                '',
                [Validators.email, Validators.required, MyValidators.restrictedEmails],
                [MyValidators.uniqEmail]
            ),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            address: new FormGroup({
                country: new FormControl('ru'),
                city: new FormControl('', Validators.required),
            }),
            skills: new FormArray([]),
        });
    }
    addSkill() {
        const control = new FormControl('', Validators.required);

        (this.form.get('skills') as FormArray).push(control);
    }
    setCapital() {
        const cityMap = {
            ru: 'Moskvabad',
            by: 'Minsk',
            ua: 'Kiyv',
        };
        const cityKey = this.form.get('address').get('country').value;
        const city = cityMap[cityKey];

        console.log('City: ', city);
        this.form.patchValue({
            address: { city },
        });
    }

    submit() {
        if (this.form.valid) {
            console.log('Form!', this.form);
            const formData = { ...this.form.value };

            console.log('Form Data: ', formData);

            this.form.reset();
        }
    }
}
