class DownloadsController < ApplicationController
  def resume
    file_path = Rails.root.join('public', 'resume.pdf')
    send_file file_path, filename: 'resume.pdf'
  end
end
