import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent {

  isSmall!: Observable<boolean>
  isMediumLargeXLarge!: Observable<boolean>
  isXSmallScreen = false;
  hidden = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.isSmall = this.breakpointObserver.observe([
      Breakpoints.XSmall
    ])
      .pipe(
        map(res => res.matches)
      )

    this.isMediumLargeXLarge = this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
      .pipe(
        map(res => res.matches)
      )
  }
}