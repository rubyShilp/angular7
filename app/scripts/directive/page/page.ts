import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "fa-page",
  templateUrl: "./page.html",
  styleUrls: ["./page.less"],
})
export class PageComponent implements OnChanges {
  @Input() totalCount: number;
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() showMaxPage: number = 5;
  @Output() goPage = new EventEmitter();
  pageCount: any = [];
  totalPage: number;
  GO: number;
  ngOnChanges() {
    this.totalPage = this.totalPageCount();
    this.pageCount = this.pageNumber(this.totalPage, this.currentPage);
  }
  //跳转页码
  setCurrentPage = (pageno: any) => {
    if (pageno == "..." || pageno == 0 || pageno > this.totalPage) {
      return;
    }
    this.currentPage = pageno;
    this.pageCount = this.pageNumber(this.totalPage, this.currentPage);
    this.goPage.next({ currentPage: pageno, pageSize: this.pageSize });
    this.GO = 10;
  };
  //计算页码
  totalPageCount = () => {
    if (this.totalCount === null || this.totalCount === undefined) {
      this.totalCount = 0;
    }
    return Math.ceil(this.totalCount / this.pageSize) === 0
      ? 1
      : Math.ceil(this.totalCount / this.pageSize);
  };
  //根据页数算出页面需要显示页码条数
  pageNumber = (totalPage: number, currentPage: number) => {
    var pages: any = [];
    if (totalPage == 0) {
      pages.push(1);
    } else if (totalPage <= this.showMaxPage) {
      for (var i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else if (totalPage - currentPage < this.showMaxPage) {
      for (var i = totalPage - 5; i <= totalPage; i++) {
        pages.push(i);
      }
    } else if (totalPage > this.showMaxPage && currentPage - 2 < 1) {
      for (var i = 1; i <= 3; i++) {
        pages.push(i);
      }
      pages.push("...");
      for (var i = totalPage - 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else if (totalPage > this.showMaxPage && currentPage - 2 > 0) {
      for (var i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
        if (pages.length == 3) {
          break;
        }
      }
      pages.push("...");
      for (var i = totalPage - 1; i <= totalPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  };
}
