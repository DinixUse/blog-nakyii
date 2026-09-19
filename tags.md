---
title: Tags
layout: tags
---

<div class="tags-container">
  <h1>Tags</h1>
  <div class="tags-list">
    {% assign tags = "" | split: "" %}
    
    {% for post in site.posts %}
      {% for category in post.categories %}
        {% unless tags contains category %}
          {% assign tags = tags | push: category %}
        {% endunless %}
      {% endfor %}
    {% endfor %}
    
    {% for tag in tags %}
      {% assign count = 0 %}
      {% for post in site.posts %}
        {% if post.categories contains tag %}
          {% assign count = count | plus: 1 %}
        {% endif %}
      {% endfor %}
      
      <div class="tag-item">
        <button class="tag-button" data-tag="{{ tag }}">
          {{ tag }}
          <span class="tag-count">({{ count }})</span>
        </button>
      </div>
    {% endfor %}
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const categories = { {% for category in site.categories %}{% capture category_name %}{{ category | first }}{% endcapture %}"{{ category_name | replace: " ", "_" }}": [{% for post in site.categories[category_name] %}{ url: `{{ site.baseurl }}{{ post.url }}`, date: `{{post.date | date_to_string}}`, title: `{{post.title}}`},{% endfor %}],{% endfor %} };
  
  document.querySelectorAll('.tag-button').forEach(button => {
    button.addEventListener('click', function() {
      const tagName = this.getAttribute('data-tag');
      const tagKey = tagName.replace(" ", "_");
      const posts = categories[tagKey];
      
      let html = '';
      posts.forEach(post => {
        html += `
          <a class="modal-article" href="${post.url}">
            <h4>${post.title}</h4>
            <small class="modal-article-date">${post.date}</small>
          </a>
        `;
      });
      
      document.querySelector('#category-modal-title').innerText = tagName;
      document.querySelector('#category-modal-content').innerHTML = html;
      document.querySelector('#category-modal-bg').classList.toggle('open');
      document.querySelector('#category-modal').classList.toggle('open');
    });
  });
  
  document.querySelector('#category-modal-bg').addEventListener('click', function() {
    document.querySelector('#category-modal-title').innerText = '';
    document.querySelector('#category-modal-content').innerHTML = '';
    document.querySelector('#category-modal-bg').classList.toggle('open');
    document.querySelector('#category-modal').classList.toggle('open');
  });
});
</script>