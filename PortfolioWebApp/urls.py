from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from PortfolioWebApp import views

urlpatterns = [
    path('', views.home, name="Inicio"),
    path('sobre-mi', views.sobre_mi, name="sobre-mi"),
    path('proyectos', views.proyectos, name="proyectos"),
    path('contacto', views.contacto, name="contacto"),
] 

