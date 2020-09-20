const genItemHTML = item => {
  return `<li class="event-item">
		<figure>
			<a href="${item.Link}">
				<img src="${item.Img}" alt="${item.Title}" />
			</a>
		</figure>
		<h3><a href="${item.Link}">${item.Title}</a></h3>
		<p>${item.Desc}</p>
	</li>`;
};
module.exports = genItemHTML;
