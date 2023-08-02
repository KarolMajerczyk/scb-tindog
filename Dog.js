// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  likeDogProfile() {
    this.hasBeenSwiped = false;
    this.hasBeenLiked = true;
  }

  rejectDogProfile() {
    this.hasBeenLiked = false;
    this.hasBeenSwiped = true;
  }

  getStateBadgeHtml() {
    if (!this.hasBeenLiked && !this.hasBeenSwiped) {
      return "";
    }

    const stateClass = this.hasBeenLiked
      ? "like"
      : this.hasBeenSwiped
      ? "nope"
      : "";

    return `
              <img class="profile-state" src="images/badge-${stateClass}.png" alt="" />
          `;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;

    return `
        ${this.getStateBadgeHtml()}
        <img class="profile-image" src="${avatar}" alt="" />
        <section class="profile-info">
            <h2 class="fw-semi-bold fs-700 fc-200">${name}, ${age}</h2>
            <p class="fs-600 fc-250">${bio}</p>
        </section>
    `;
  }
}

export default Dog;
