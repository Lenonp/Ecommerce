import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/Book";

@Injectable()

export class BookService
{
    private url = 'https://localhost:44382/api/bookstore';

    httpOptions =
    {
        headers: new HttpHeaders ({'Content-Type': 'application/json' })
    }

    constructor (private http:HttpClient) {}

    getBook()
    {
        return this.http.get(this.url)
    }
}
