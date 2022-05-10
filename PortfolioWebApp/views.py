from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render
from PortfolioWebApp import models

# Create your views here.

def home(request):

    return render(request, 'PortfolioWebApp/index.html')

def sobre_mi(request):

    return render(request, 'PortfolioWebApp/sobremi.html')

def proyectos(request):

    proyectosLista = models.Proyectos.objects.all()
    return render(request, 'PortfolioWebApp/proyectos.html', {"proyectos": proyectosLista})

def contacto(request):

    if request.method == 'POST':

        subject = request.POST['asunto']
        message = request.POST['mensaje'] + " " + request.POST['email']
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["devcquirozm@gmail.com"]

        send_mail(subject, message, email_from, recipient_list)
        
        #return render(request, "gracias.html")
    
    return render(request, 'PortfolioWebApp/contacto.html')


def error_404(request, exception):
    return render(request, 'PortfolioWebApp/404.html')


