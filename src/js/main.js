import data from "../data/class-member.json" assert { type: "json" };

let contentRef = document.querySelector("#class_member");

let formattedData = data
  .filter((_, idx) => {
    if ((idx + 1) % 4 === 0) return true;
  })
  .map((_, idx) => {
    return data.slice(idx * 4, (idx + 1) * 4);
  });

function avatarUrl(avatar) {
  return `https://res.cloudinary.com/rulasfia/image/upload/c_scale,w_540/v1663838342/d3-itb-2020/${avatar}.webp`;
}

/**
 * @param {typeof data} items
 * @returns {string}
 */
function getContent(items) {
  const [one, two, three, four] = items;
  return `
    <div class="row">
      <div class="col">
        <span></span>
        <a target="_blank" href="${avatarUrl(
          one.avatar
        )}" data-lightbox="roadtrip">
          <img loading="lazy" src="${avatarUrl(one.avatar)}" alt="${one.name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${one.name}</h3>
        <p>${one.birthday}</p>
        <div class="social-link">
          <a href="${one.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${one.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${one.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span></span>
        <a target="_blank" href="${avatarUrl(
          two.avatar
        )}" data-lightbox="roadtrip">
          <img loading="lazy" src="${avatarUrl(two.avatar)}" alt="${two.name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${two.name}</h3>
        <p>${two.birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${two.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${two.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${two.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <h3>${three.name}</h3>
        <p>${three.birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${three.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${three.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${three.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a target="_blank" href="${avatarUrl(
          three.avatar
        )}" data-lightbox="roadtrip">
          <img loading="lazy" src="${avatarUrl(three.avatar)}" alt="${
    three.name
  }"/>
        </a>
      </div>
      <div class="col">
        <h3>${four.name}</h3>
        <p>${four.birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${four.social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${four.social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${four.social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a target="_blank" href="${avatarUrl(
          four.avatar
        )}" data-lightbox="roadtrip">
          <img loading="lazy" src="${avatarUrl(four.avatar)}" alt="${
    four.name
  }"/>
        </a>
      </div>
    </div>
    `;
}

formattedData.forEach((items) => {
  contentRef.insertAdjacentHTML("beforeend", getContent(items));
});
