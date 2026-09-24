module Jekyll
  module LinkFilter
    def parse_link_syntax(input)
      return input unless input.is_a?(String)
      
      result = input.gsub(/\{Link\}\[(.*?)\]\[(.*?)\]\[(.*?)\]\[(.*?)\]/) do
        logo_url = CGI.escapeHTML(Regexp.last_match(1))
        name = CGI.escapeHTML(Regexp.last_match(2))
        description = CGI.escapeHTML(Regexp.last_match(3))
        link_url = CGI.escapeHTML(Regexp.last_match(4))
        
        <<~HTML
        <div class="friend-link-card">
          <a href="#{link_url}" target="_blank" rel="noopener noreferrer" class="friend-link-wrapper">
            <div class="friend-link-logo">
              <img src="#{logo_url}" alt="#{name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="friend-link-logo-default" style="display: none; align-items: center; justify-content: center; width: 80px; height: 80px; background-color: var(--md-sys-color-primary-container); border-radius: 12px; color: var(--md-sys-color-on-primary-container); font-weight: bold; font-size: 1.2rem;">
                #{name.chars.first}
              </div>
            </div>
            <div class="friend-link-content">
              <h3 class="friend-link-name">#{name}</h3>
              <p class="friend-link-description">#{description}</p>
            </div>
          </a>
        </div>
        HTML
      end
      
      result
    end
  end
end

Liquid::Template.register_filter(Jekyll::LinkFilter)