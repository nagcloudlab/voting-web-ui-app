import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VotingItemComponent } from './voting-item.component';

describe('VotingItemComponent', () => {
  let component: VotingItemComponent;
  let fixture: ComponentFixture<VotingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have default count with zero", () => {
    let intialVoteCount = component.voteCount;
    expect(intialVoteCount).toBe(0)
  })

  it("should increment voteCount by 1 on up-vote", async () => {
    fixture.detectChanges();
    const upVoteBtn = fixture.debugElement.query(By.css('.btn-success'))
    upVoteBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        expect(component.voteCount).toBe(1)
      })
  })

  it("should decrement voteCount by 1 on down-vote", async () => {
    fixture.detectChanges();
    const upVoteBtn = fixture.debugElement.query(By.css('.btn-danger'))
    upVoteBtn.triggerEventHandler('click', null)
    fixture.detectChanges();
    fixture.whenStable()
      .then(() => {
        expect(component.voteCount).toBe(-1)
      })
  })


});
