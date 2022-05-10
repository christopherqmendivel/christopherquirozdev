from django.contrib import admin
from PortfolioWebApp.models import Proyectos

# Register your models here.

class ClientesAdmin(admin.ModelAdmin):
    list_display = ("id", "skill", "image", "nombre", "repositorio", "skill_hash", "netlify")
    search_fields = ("nombre", )
    list_filter = ('skill', )


admin.site.register(Proyectos, ClientesAdmin)