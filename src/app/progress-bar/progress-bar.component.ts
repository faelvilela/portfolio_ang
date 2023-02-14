import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'progress-bar',
  template: `
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>
  `,
  styles: [`
    .progress-container {
      width: 50%;
      height: 20px;
      background-color: #ddd;
      border-radius: 15px;
      position: relative;
    }

    .progress-bar {
      height: 100%;
      border-radius: 15px;
      background-color: #4caf50;
      transition: width 2s ease-out;
    }

    .animate {
      width: 70%;
    }
  `]
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const progressBar = this.elementRef.nativeElement.querySelector('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBar.classList.add('animate');
          observer.unobserve(progressBar);
        }
      });
    });

    observer.observe(progressBar);
  }
}
