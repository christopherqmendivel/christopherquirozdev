from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render
from PortfolioWebApp.models import Contacto

# Create your views here.

def home(request):

    return render(request, 'PortfolioWebApp/index.html')

def sobre_mi(request):

    return render(request, 'PortfolioWebApp/sobremi.html')

def proyectos(request):

    proyectosLista = Contacto.Proyectos.objects.all()
    return render(request, 'PortfolioWebApp/proyectos.html', {"proyectos": proyectosLista})

def contacto(request):

    return render(request, 'PortfolioWebApp/contacto.html')

def send_form(request):

    if request.method == 'POST':
        nombre = request.POST['nombre']
        email = request.POST['email']
        asunto = request.POST['asunto']
        mensaje = request.POST['mensaje']


        Contacto.objects.create(
            nombre = nombre,
            email = email,
            asunto = asunto,
            mensaje = mensaje
        )

        
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["devcquirozm@gmail.com"]

        send_mail(asunto, mensaje, email_from, recipient_list)
        return HttpResponse('')

def error_404(request, exception):
    return render(request, 'PortfolioWebApp/404.html')


