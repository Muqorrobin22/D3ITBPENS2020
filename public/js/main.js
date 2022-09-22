import data from "../data/class-member.json" assert { type: "json" };

let contentRef = document.querySelector("#class_member");

let formattedData = data
  .filter((_, idx) => {
    if ((idx + 1) % 4 === 0) return true;
  })
  .map((_, idx) => {
    return data.slice(idx * 4, (idx + 1) * 4);
  });

/**
 * @param {typeof data} items
 * @returns {string}
 */
function getContent(items) {
  return `
    <div class="row">
      <div class="col">
        <span></span>
        <a href="${items[0].avatar}" data-lightbox="roadtrip">
          <img src="${items[0].avatar}" alt="${items[0].name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${items[0].name}</h3>
        <p>${items[0].birthday}</p>
        <div class="social-link">
          <a href="${items[0].social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${items[0].social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${items[0].social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span></span>
        <a href="${items[1].avatar}" data-lightbox="roadtrip">
          <img src="${items[1].avatar}" alt="${items[1].name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${items[1].name}</h3>
        <p>${items[1].birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${items[1].social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${items[1].social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${items[1].social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <h3>${items[2].name}</h3>
        <p>${items[2].birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${items[2].social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${items[2].social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${items[2].social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a href="${items[2].avatar}" data-lightbox="roadtrip">
          <img src="${items[2].avatar}" alt="${items[2].name}"/>
        </a>
      </div>
      <div class="col">
        <h3>${items[3].name}</h3>
        <p>${items[3].birthday || "Unknown"}</p>
        <div class="social-link">
          <a href="${items[3].social.facebook}">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="${items[3].social.twitter}">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="${items[3].social.instagram}">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <span class="arrow"></span>
        <a href="${items[3].avatar}" data-lightbox="roadtrip">
          <img src="${items[3].avatar}" alt="${items[3].name}"/>
        </a>
      </div>
    </div>
    <br/>
    `;
}

formattedData.forEach((items) => {
  contentRef.insertAdjacentHTML("beforeend", getContent(items));
});
