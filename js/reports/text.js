/**
 * VRDControl - Plain Text Report Export
 * =======================================
 * 
 * Generates a simple text report for environments where
 * HTML is not practical (email body, SMS, print).
 * Uses box-drawing characters for visual structure.
 */

/**
 * Generate and download a plain text report.
 */
function generateTextReport() {
    let report = `═══════════════════════════════════════════════════════\n`;
    report += `RAPPORT DE SUIVI DE CHANTIER - VRDControl\n`;
    report += `═══════════════════════════════════════════════════════\n\n`;
    report += `Projet: ${currentProject.name}\n`;
    report += `Date: ${new Date().toLocaleDateString('fr-FR')}\n`;
    report += `Nombre de points: ${currentProject.points.length}\n\n`;

    const stats = getProjectStats(currentProject);
    report += `Statut global:\n`;
    report += `  - À faire: ${stats.todo}\n`;
    report += `  - En cours: ${stats.progress}\n`;
    report += `  - Terminé: ${stats.done}\n`;
    report += `\n═══════════════════════════════════════════════════════\n\n`;

    currentProject.points.forEach((point, index) => {
        const status = point.status === 'done' ? 'TERMINÉ ✓' :
                      point.status === 'progress' ? 'EN COURS ⏳' : 'À FAIRE ⏸';

        report += `POINT ${index + 1}: ${point.title}\n`;
        report += `${'─'.repeat(55)}\n`;
        report += `Statut: ${status}\n`;
        report += `Adresse: ${point.address}\n`;
        report += `Coordonnées: ${point.lat.toFixed(6)}, ${point.lng.toFixed(6)}\n`;
        report += `Date: ${new Date(point.createdAt).toLocaleString('fr-FR')}\n\n`;
        report += `Commentaire:\n${point.comment}\n`;

        const photos = getPointPhotos(point);
        if (photos.length > 0) {
            report += `\n[${photos.length} photo(s) disponible(s) dans l'application]\n`;
        }
        report += `\n═══════════════════════════════════════════════════════\n\n`;
    });

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `VRDControl_${currentProject.name}_rapport_${Date.now()}.txt`;
    link.click();
}
