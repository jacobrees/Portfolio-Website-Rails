class ContactFormController < ApplicationController
    def new
        @contact = Contact.new
      end
    
      def create
        @contact = Contact.new(contact_params)
        if @contact.save
          # Send email to the site owner or notify in other ways
          flash[:success] = 'Thank you for your message!'
          redirect_to contact_path
        else
          flash.now[:error] = @contact.errors.full_messages.join(', ')
          render :new
        end
      end
    
      private
    
      def contact_params
        params.permit(:name, :email, :message)
      end
end
