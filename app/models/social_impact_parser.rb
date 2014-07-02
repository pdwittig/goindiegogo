require 'nokogiri'
class SocialImpactParser
  def parse(campaign)

  end

  def find_element(document, selector)
    p document
    if !document.css(selector).empty?
      p 'no fuck'
      return document.css(selector)
    else
      document.children.each do |child|
        p 'fuck'
        find_element(child, selector)
      end
    end 
  end


end