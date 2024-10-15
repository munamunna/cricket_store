import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVedioGalleryComponent } from './home-vedio-gallery.component';

describe('HomeVedioGalleryComponent', () => {
  let component: HomeVedioGalleryComponent;
  let fixture: ComponentFixture<HomeVedioGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVedioGalleryComponent]
    });
    fixture = TestBed.createComponent(HomeVedioGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
