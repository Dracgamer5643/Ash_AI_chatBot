from django.contrib import admin
from django.urls import path
from Ash import views
from signin.views import Signin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.Ash),
    path("signin/",  Signin, name='Signin'),
]
