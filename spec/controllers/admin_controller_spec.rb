require 'rails_helper'

RSpec.describe AdminController, type: :controller do

  describe "GET #hacker_list" do
    it "returns http success" do
      sign_in FactoryGirl.create(:admin)
      get :hacker_list
      expect(response).to have_http_status(:success)
    end
  end

end
