from distutils.command.upload import upload
from tabnanny import verbose
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Proyectos(models.Model):
    skill = models.CharField(max_length=50)
    image = models.ImageField(upload_to="proyectos_img", null=True, verbose_name="Imagen Proyecto")
    nombre = models.CharField(max_length=50, verbose_name="Nombre Proyecto")
    repositorio = models.URLField(max_length=200, verbose_name="Repositorio URL", blank=True, null=True)
    skill_hash = ArrayField(models.CharField(max_length=20, blank=True), verbose_name="Tecnologías Usadas")
    netlify = models.URLField(max_length=200, verbose_name="Netlify URL", blank=True, null=True)
    

