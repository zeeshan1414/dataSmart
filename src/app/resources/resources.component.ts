import { Component, OnInit } from "@angular/core";
import { ApiService } from '../api.service';

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"]
})
export class ResourcesComponent implements OnInit {
  constructor(private api: ApiService) { }

  term: string = '';

  title: string;
  text: string;
  url: string;

  allResource:boolean = true;
  grades:boolean;
  subjects:boolean;
  publishers:boolean;
  edtech:boolean;

  getAllResources($event) {
    this.publishers = false;
    this.grades = false;
    this.subjects = false;
    this.edtech = false;
    this.allResource = $event;
  }

  getEdtech($event) {
    this.publishers = false;
    this.grades = false;
    this.subjects = false;
    this.allResource = false;
    this.edtech = $event;
  }

  getPublishers($event) {
    this.allResource = false;
    this.grades = false;
    this.subjects = false;
    this.edtech = false;
    this.publishers = $event;

  }

  getGrades($event) {
    this.allResource = false;
    this.publishers = false;
    this.subjects = false;
    this.edtech = false;
    this.grades = $event;
  }

  getSubjects($event) {
    this.allResource = false;
    this.grades = false;
    this.publishers = false;
    this.edtech = false;
    this.subjects = $event;
  }

  add() {
    this.resources.push({ imgUrl: this.url, title: this.title, text: this.text, linkText: "Go Somewhere" })
    this.api.addResource({ title: this.title, description: this.text, img_url: this.url }).subscribe(res =>
      res)
    this.title = '';
    this.text = '';
    this.url = '';
  }

  resources = [
    {
      imgUrl:
        "https://cdn.dribbble.com/users/992274/screenshots/6482904/lucky_man_1_kit8-net.png",
      title: "Title One",
      text:
        "With supporting text below as a natural lead-in to additional content.",
      linkText: "Go somewhere"
    },
    {
      imgUrl:
        "https://cdn.dribbble.com/users/2390791/screenshots/6596541/mmexport1559902963699_1x.jpg",
      title: "Title Two",
      text:
        "With supporting text below as a natural lead-in to additional content.",
      linkText: "Go somewhere"
    },
    {
      imgUrl:
        "https://cdn.dribbble.com/users/1042639/screenshots/6435930/_____-04.png",
      title: "Title Three",
      text:
        "With supporting text below as a natural lead-in to additional content.",
      linkText: "Go somewhere"
    },
    {
      imgUrl:
        "https://cdn.dribbble.com/users/1296964/screenshots/6673488/33.png",
      title: "Title Four",
      text:
        "With supporting text below as a natural lead-in to additional content.",
      linkText: "Go somewhere"
    },
    {
      imgUrl:
        "https://cdn.dribbble.com/users/293042/screenshots/6623042/text_1x.jpg",
      title: "Title Five",
      text:
        "With supporting text below as a natural lead-in to additional content.",
      linkText: "Go somewhere"
    }
  ];

  ngOnInit(): void { }
}
