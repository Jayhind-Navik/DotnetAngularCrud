import { Injectable } from "@angular/core";
import { PersonModel } from "./person.model";
import { HttpErrorResponse } from "@angular/common/http";

export interface PersonState {
    people: readonly PersonModel[],
    loading: boolean,
    error: HttpErrorResponse[] | null
}

const _initialSte: PersonState = {
    people: [],
    loading: false,
    error: null
}

@Injectable()
export class PersonStore {

}