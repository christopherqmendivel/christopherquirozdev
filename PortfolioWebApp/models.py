from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils.html import mark_safe

# Create your models here.

class Proyectos(models.Model):
    skill = models.CharField(max_length=50)
    image = models.ImageField(upload_to="proyectos_img/", null=True, verbose_name="Path image")
    nombre = models.CharField(max_length=50, verbose_name="Nombre Proyecto")
    repositorio = models.URLField(max_length=200, verbose_name="Repositorio URL", blank=True, null=True)
    skill_hash = ArrayField(models.CharField(max_length=20, blank=True), verbose_name="Tecnologías Usadas")
    netlify = models.URLField(max_length=200, verbose_name="Netlify URL", blank=True, null=True)

    class Meta:
        verbose_name_plural = '1. Proyectos'

    def image_tag(self):
        return mark_safe('<img src="%s" width="50" height="50" />' % (self.image.url))

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField(default='')    
    asunto = models.CharField(max_length=100)
    mensaje = models.TextField()

    class Meta:
        verbose_name_plural = '2. Contacto'



