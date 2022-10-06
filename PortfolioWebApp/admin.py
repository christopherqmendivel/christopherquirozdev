from django.contrib import admin
from PortfolioWebApp.models import Contacto, Proyectos

# Register your models here.

class ClientesAdmin(admin.ModelAdmin):
    list_display = ("id", "image_tag", "skill", "image", "nombre", "repositorio", "skill_hash", "netlify")
    search_fields = ("nombre", )
    list_filter = ('skill', )

class ContactoAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre", "email", "asunto", "mensaje")

admin.site.register(Proyectos, ClientesAdmin)
admin.site.register(Contacto, ContactoAdmin)